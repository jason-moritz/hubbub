class UsersController < ApplicationController
  before_action :set_user, except: :create
  before_action :authorize_request, except: :create
  # GET /users
  # def index
  #   @users = User.all

  #   render json: @users
  # end

  # GET /users/1
  def show
    render json: @user.attributes.except('password_digest')
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      @token = encode({ id: @user.id })
      render json: {
        error: @user.attributes.except('password_digest'),
        token: @token
      }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(update_params)
      @token = encode({ id: @user.id })
      render json: {
        error: @user.attributes.except('password_digest'),
        token: @token
      }, status: :accepted
    else
      render json: {
        user: @user.errors,
        error: 'Unaccepted fields'
      }, status: :unprocessable_entity
    end
  end

  def update_password
    if @user.authenticate(confirm_params[:old_password]) && password_params[:password] == confirm_params[:password_confirmation] && @user.update(password_params)
      @token = encode({ id: @user.id })
      render json: {
        user: @user.attributes.except('password_digest'),
        token: @token
      }, status: :accepted
    elsif !@user.authenticate(confirm_params[:old_password])
      render json: {
        user: @user.errors,
        error: 'Current password is invalid.'
      }, status: :unauthorized
    else
      render json: {
        user: @user.errors,
        error: 'Passwords do not match.'
      }, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  # def destroy
  #   @user.destroy
  # end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def user_params
    params.require(:user).permit(:username, :email, :image_url, :password, :public_img)
  end

  def update_params
    params.require(:user).permit(:username, :email, :image_url, :public_img)
  end

  def confirm_params
    params.require(:security).permit(:old_password, :password_confirmation)
  end

  def password_params
    params.require(:security).permit(:password)
  end
end
