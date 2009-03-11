require 'test_helper'

class ResponsesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:responses)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create response" do
    assert_difference('Response.count') do
      post :create, :response => { }
    end

    assert_redirected_to response_path(assigns(:response))
  end

  test "should show response" do
    get :show, :id => responses(:one).id
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => responses(:one).id
    assert_response :success
  end

  test "should update response" do
    put :update, :id => responses(:one).id, :response => { }
    assert_redirected_to response_path(assigns(:response))
  end

  test "should destroy response" do
    assert_difference('Response.count', -1) do
      delete :destroy, :id => responses(:one).id
    end

    assert_redirected_to responses_path
  end
end
