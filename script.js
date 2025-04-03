// Get Element IDs
var take_test_one_pointer = document.getElementById("take-a-test-1");
var take_test_two_pointer = document.getElementById("take-a-test-2");

var category_one_description_section_pointer = document.getElementById("category-1-description-section");
var category_two_description_section_pointer = document.getElementById("category-2-description-section");

var questionnaire_one_pointer = document.getElementById("questionnaire-1");
var questionnaire_two_pointer = document.getElementById("questionnaire-2");

var rating_one_pointer = document.getElementById("rating-one");
var rating_two_pointer = document.getElementById("rating-two");

var rating_scale_one_pointer = document.getElementById("rating-scale-1");
var rating_scale_two_pointer = document.getElementById("rating-scale-2");

var rating_comment_one_pointer = document.getElementById("rating-comment-1");
var rating_comment_two_pointer = document.getElementById("rating-comment-2");

var rating_description_one_pointer = document.getElementById("rating-description-1");
var rating_description_two_pointer = document.getElementById("rating-description-2");


var question_one_pointer = document.getElementById("question-1");
var question_two_pointer = document.getElementById("question-2");

var answer_1_1_pointer = document.getElementById("answer-1-1");
var answer_2_1_pointer = document.getElementById("answer-2-1");

var answer_1_2_pointer = document.getElementById("answer-1-2");
var answer_2_2_pointer = document.getElementById("answer-2-2");


var return_to_description_one_button_pointer = document.getElementById("return-to-description-one-button");
var return_to_description_two_button_pointer = document.getElementById("return-to-description-two-button");

// Initialize important variables

var current_question_set = 0;
var current_question_counter = 0;
var sus_value = 0;


// Reset important variables
function resetVariables(){
    current_question_counter = 0;

    sus_value = 0;
}


// Add Event Listeners
answer_1_1_pointer.addEventListener("click", () => {advanceQuestion(0)});
answer_1_2_pointer.addEventListener("click", () => {advanceQuestion(1)});

answer_2_1_pointer.addEventListener("click", () => {advanceQuestion(0)});
answer_2_2_pointer.addEventListener("click", () => {advanceQuestion(1)});


// Allow for scrolling through categories
var current_category_selected = 0;
var recently_moved_mouse_wheel = false;

document.addEventListener("wheel", () => {
    if((recently_moved_mouse_wheel == false) && (currently_taking_a_test == false)){
        if(event.deltaY > 0){
            if(current_category_selected == 0){
                document.getElementById("category-container").scrollTo({
                    left: 1000,
                    top: 0,
                    behavior: "smooth"
                });
                current_category_selected = 1;
            } else if(current_category_selected == 1){
                document.getElementById("category-container").scrollTo({
                    left: 2000,
                    top: 0,
                    behavior: "smooth"
                });
                current_category_selected = 2;
            } else if(current_category_selected == 2){
                document.getElementById("category-container").scrollTo({
                    left: 3000,
                    top: 0,
                    behavior: "smooth"
                });
                current_category_selected = 3;
            }
        } else if(event.deltaY < 0) {
            if(current_category_selected == 3){
                document.getElementById("category-container").scrollTo({
                    left: 2000,
                    top: 0,
                    behavior: "smooth"
                });
                current_category_selected = 2;
            } else if(current_category_selected == 2){
                document.getElementById("category-container").scrollTo({
                    left: 1000,
                    top: 0,
                    behavior: "smooth"
                });
                current_category_selected = 1;
            } else if(current_category_selected == 1){
                document.getElementById("category-container").scrollTo({
                    left: 0,
                    top: 0,
                    behavior: "smooth"
                });
                current_category_selected = 0;
            }
        }

        // Add delay so the user doesn't end up in the end
        recently_moved_mouse_wheel = true;
        setTimeout(resetMouseWheelFunctionality, 500);
    }
})

function resetMouseWheelFunctionality(){
    recently_moved_mouse_wheel = false;
}


var currently_taking_a_test = false;

take_test_one_pointer.addEventListener("click", () => {
    if(current_category_selected == 0){
        current_question_set = 0;
        
        category_one_description_section_pointer.style.display = "none"; // Hide Description Section
        questionnaire_one_pointer.style.display = "block"; // Show Question Section

        startQuestionSet();

        currently_taking_a_test = true;
    }
})

take_test_two_pointer.addEventListener("click", () => {
    if(current_category_selected == 1){
        current_question_set = 1;
        
        category_two_description_section_pointer.style.display = "none"; // Hide Description Section
        questionnaire_two_pointer.style.display = "block"; // Show Question Section

        startQuestionSet();

        currently_taking_a_test = true;
    }
})



return_to_description_one_button_pointer.addEventListener("click", () => {
    category_one_description_section_pointer.style.display = "block"; // Show Description Section
    rating_one_pointer.style.display = "none"; // Hide Rating Section

    currently_taking_a_test = false;
})

return_to_description_two_button_pointer.addEventListener("click", () => {
    category_two_description_section_pointer.style.display = "block"; // Show Description Section
    rating_two_pointer.style.display = "none"; // Hide Rating Section

    currently_taking_a_test = false;
})




// Start Question Set
function startQuestionSet(){
    resetVariables();

    // Replace Questions
    replaceQuestions();
}

function advanceQuestion(choice){
    if(current_question_counter < 9){
        sus_value = sus_value + choice_weights[current_question_set][current_question_counter][choice];

        current_question_counter += 1;
        replaceQuestions();

        console.log(sus_value);
    } else {
        sus_value = sus_value + choice_weights[current_question_set][current_question_counter][choice];

        finishQuestionSet();
    }
}

function replaceQuestions(){
    if(current_question_set == 0){
        question_one_pointer.innerHTML = `${current_question_counter + 1}. ${questions[current_question_set][current_question_counter]}`;
    } else if(current_question_set == 1){
        question_two_pointer.innerHTML = `${current_question_counter + 1}. ${questions[current_question_set][current_question_counter]}`;
    }
    
}



function finishQuestionSet(){
    // Calculate and change the text to show the ratings
    var rating = Math.round((sus_value / 10) * 100) / 100
    var rating_integer = Math.round(rating)

    if(current_question_set == 0){
        questionnaire_one_pointer.style.display = "none"; // Hide Question Section
        
        rating_scale_one_pointer.innerHTML = `${rating} / 5`;
        if(rating_integer == 0){
            rating_comment_one_pointer.innerHTML = `${rating_comments[current_question_set][rating_integer]}`;
            rating_description_one_pointer.innerHTML = `${rating_descriptions[current_question_set][rating_integer]}`;
        } else {
            rating_comment_one_pointer.innerHTML = `${rating_comments[current_question_set][rating_integer - 1]}`;
            rating_description_one_pointer.innerHTML = `${rating_descriptions[current_question_set][rating_integer - 1]}`;
        }
        
        rating_one_pointer.style.display = "block"; // Show Rating Section
    } else if(current_question_set == 1){
        questionnaire_two_pointer.style.display = "none"; // Hide Question Section
        
        rating_scale_two_pointer.innerHTML = `${rating} / 5`;
        if(rating_integer == 0){
            rating_comment_two_pointer.innerHTML = `${rating_comments[current_question_set][rating_integer]}`;
            rating_description_two_pointer.innerHTML = `${rating_descriptions[current_question_set][rating_integer]}`;
        } else {
            rating_comment_two_pointer.innerHTML = `${rating_comments[current_question_set][rating_integer - 1]}`;
            rating_description_two_pointer.innerHTML = `${rating_descriptions[current_question_set][rating_integer - 1]}`;
        }
        
        rating_two_pointer.style.display = "block"; // Show Rating Section
    }
}


