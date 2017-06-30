class Api::AttractionsController < ApplicationController
  def query
    arrival = params[:arrival].to_date
    departure = params[:departure].to_date
    budget = params[:budget].to_i
    tag_ids = params[:tag_ids].map(&:to_i)
    @attractions_by_day = Attraction.query(arrival, departure, budget, tag_ids)
  end
end
