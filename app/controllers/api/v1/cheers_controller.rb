class Api::V1::CheersController < ApplicationController
  def index
    @cheers = Cheer.all.sample(1)
    render json: @cheers.to_json, status: :ok
  end
end
