module Views.SelectWorkoutName exposing (..)

import Data.Workout exposing (renderWorkoutName)
import Html exposing (..)
import Html.Attributes exposing (class)
import Html.Events exposing (..)
import Types exposing (..)
import Views.Icon exposing (wideGripHeader)


view : Model -> Html Msg
view model =
    div [ class "tc" ]
        [ wideGripHeader "track workout"
        , selectWorkoutName Push
        , selectWorkoutName Pull
        , selectWorkoutName Legs
        ]


selectWorkoutName : WorkoutName -> Html Msg
selectWorkoutName workoutName =
    p
        [ onClick <| StartWorkout workoutName
        , class "pointer mv4 headline tracked ttu bg-animate hover-bg-navy bg-gray pa3 br-pill white mw5 center"
        ]
        [ text <| renderWorkoutName workoutName ]
