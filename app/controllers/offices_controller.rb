class OfficesController < ApplicationController
    def index
        @offices = Office.all
    end
    
    def show
        @office = Office.find(params[:id])
        render json: @office
    end
end
