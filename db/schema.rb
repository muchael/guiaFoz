# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170629163201) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attraction_tags", force: :cascade do |t|
    t.bigint "tag_id", null: false
    t.bigint "attraction_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["attraction_id"], name: "index_attraction_tags_on_attraction_id"
    t.index ["tag_id"], name: "index_attraction_tags_on_tag_id"
  end

  create_table "attraction_times", force: :cascade do |t|
    t.integer "weekday", null: false
    t.time "start_time", null: false
    t.boolean "holidays", null: false
    t.bigint "attraction_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["attraction_id"], name: "index_attraction_times_on_attraction_id"
  end

  create_table "attractions", force: :cascade do |t|
    t.string "name", null: false
    t.time "duration", null: false
    t.time "travel_time", null: false
    t.decimal "adult_price", null: false
    t.boolean "adults_only", default: false
    t.string "picture"
    t.bigint "place_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["place_id"], name: "index_attractions_on_place_id"
  end

  create_table "itineraries", force: :cascade do |t|
    t.datetime "start", null: false
    t.datetime "end", null: false
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_itineraries_on_user_id"
  end

  create_table "itinerary_attractions", force: :cascade do |t|
    t.bigint "itinerary_id", null: false
    t.bigint "attraction_time_id", null: false
    t.datetime "start", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["attraction_time_id"], name: "index_itinerary_attractions_on_attraction_time_id"
    t.index ["itinerary_id"], name: "index_itinerary_attractions_on_itinerary_id"
  end

  create_table "places", force: :cascade do |t|
    t.string "name", null: false
    t.string "picture"
    t.decimal "latitude"
    t.decimal "longitude"
    t.string "phone"
    t.string "website"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tags", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "attraction_tags", "attractions"
  add_foreign_key "attraction_tags", "tags"
  add_foreign_key "attraction_times", "attractions"
  add_foreign_key "attractions", "places"
  add_foreign_key "itineraries", "users"
  add_foreign_key "itinerary_attractions", "attraction_times"
  add_foreign_key "itinerary_attractions", "itineraries"
end
