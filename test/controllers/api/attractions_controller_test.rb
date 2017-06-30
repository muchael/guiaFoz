require 'test_helper'

class Api::AttractionsControllerTest < ActionDispatch::IntegrationTest
  test "should get query" do
    get api_attractions_query_url
    assert_response :success
  end

end
