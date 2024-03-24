class UserController < ApplicationController
  def index
    @user = User.all
  end

  def login

  end
end