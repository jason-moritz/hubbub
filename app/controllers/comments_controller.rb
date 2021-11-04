class CommentsController < ApplicationController
  before_action :set_comment, only: [:update, :destroy]
  before_action :authorize_request

  
  # GET /comments
  # def index
  #   @comments = Comment.where(comment.post_id == params[:id])
  #   render json: @comments, :include user
  # end

  # GET /comments/1
  # def show
  #   render json: @comment
  # end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)
    @comment.user = @current_user
    @comment.post_id = params[:post_id]
    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @payload[:id] == @comment.user_id && @comment.update(comment_params)
      render json: @comment
    elsif @payload[:id] != @comment.user_id
      render json: {
        error: 'User is not the owner of this comment.'
        }, status: :unauthorized
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    if @payload[:id] == @comment.user_id
      @comment.destroy
      render json: { message: 'Comment has been destroyed.'}
    elsif @payload[:id] != @comment.user_id
      render json: {
        error: 'User is not the owner of this comment.'
        }, status: :unauthorized
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:content, :user_id, :post_id)
    end
end

