class PlayersController < ApplicationController

  def index
  end
  def show
    @player = Player.find(params[:id])
  end

  def create
    @player = Player.new(player_params)
    p "params",params.to_a
    if @player.save
      render :show
    else
      redirect_to new_game_path
    end
  end

  private
  def player_params
    params.require(:player).permit(:name, :sprite)
  end
end
