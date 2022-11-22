class Api::V1::CheersController < ApplicationController
  def index
    @cheers = Cheer.all
    render json: @cheers, status: :ok
  end
end
