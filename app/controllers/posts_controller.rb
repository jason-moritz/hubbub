class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :authorize_request, except: [:index, :show]
  # GET /posts
  def index
    @posts = Post.all
    render json: @posts, include: [
      user: { only: ['username', 'image_url'] }, 
      comments: { only: ['id'] }
    ]
  end

  # GET /posts/1
  def show
    render json: @post, include: [
      user: { only: ['username', 'image_url'] },
      comments: { include: [user: { only: ['username', 'image_url'] }] }
    ]
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user
    if @post.save
      render json: @post, include: [ 
        user: { only: ['username', 'image_url'] },
        comments: { include: ['id']}],
        status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @payload[:id] == @post.user_id && @post.update(post_params)
      render json: @post, include: [ 
        user: { only: ['username', 'image_url'] },
        comments: { include: ['id']}],
        status: :accepted
    elsif @payload[:id] != @post.user_id
      render json: {
        error: 'User is not the owner of this post.'
        }, status: :unauthorized
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    if @payload[:id] == @post.user_id
      @post.destroy
      render json: { message: 'Post has been destroyed.' }
    elsif @payload[:id] != @post.user_id
      render json: {
        error: 'User is not the owner of this post.'
        }, status: :unauthorized
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title, :content, :image_url, :user_id)
    end
end
