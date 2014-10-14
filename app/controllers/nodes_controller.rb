class NodesController < ApplicationController
  def new
  	  	Rails.logger.info "Hello #{Nodes.all}"
  end
end
