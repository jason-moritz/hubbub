class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :authorize_request, except: [:index, :show]
  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  # GET /posts/1
  def show
    @user = User.find(@post.user_id)
    render json: {
      post: @post, 
      username: @user.username, 
      image_url: @user.image_url
    }
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user
    if @post.save
      render json: @post, status: :created
    else
      render json: {
        error: @post.errors, 
        status: :unprocessable_entity,
        message: 'Authentication failed.'
      }
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @payload[:id] == @post.user_id && @post.update(post_params)
      render json: @post
    elsif @payload[:id] != @post.user_id
      render json: {
        error: @post.errors, 
        status: :unauthorized,
        message: 'User is not the owner of this post.'
      }
    else
      render json: {
        error: @post.errors,
        status: :unprocessable_entity,
        message: 'Request body has unpermitted content.'
      }
    end
  end

  # DELETE /posts/1
  def destroy
    if @payload[:id] == @post.user_id
      @post.destroy
      render json: { message: 'Post has been destroyed.' }
    else
      render json: {
        error: @post.errors, 
        status: :unauthorized,
        message: 'User is not the owner of this post.'
      }
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
