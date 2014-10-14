class StaticPagesController < ApplicationController
  def home
    # connection to the database
    con = Mysql.new('10.64.86.170', 'viewer', '$viewer$', 'testbed_status_dev')

    rs = con.query("SELECT * FROM node_specs") 

    @ans = []
    rs.each_hash { |h| 
      @ans << h
    }
   
    @problems = [] 
    rs.each_hash { |h| 
      @ans << h
    }

    j = 1
    @ans.each do |a|
        puts "****"
        puts "#{a}"
        if a["ping"] == '0' || a["cmc_status"] == '0' || a["image_load"] == '0'
            puts "error"
            @problems[j] = a
            puts "#{@problems[j]}"
            j += 1
        end
            puts "#{a["cmc_status"]}"
            puts "#{a["image_load"]}"
            puts "#{a["ping"]}"
            puts "#{a["ssh"]}"
    end

    @problems.each do |a|
        puts "#{a}"
        puts "****"
    end

  end
end