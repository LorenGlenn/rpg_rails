class GamesController < ApplicationController
  before_action :authenticate_user!

  def new
    @game = Game.new
    @user = current_user
  end


end
