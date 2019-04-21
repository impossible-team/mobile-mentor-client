<template>
    <div id="battlePlay">
        <div class="count-and-time">
            <p class="count-wrapp">{{questionIndex + 1}} из {{questions.length}} вопросов</p>
            <p class="time-wrapp">осталось {{countDown}} сек.</p>
        </div>
        <div id="content-question">
        </div>
        <div class="next-question">
            <button>дальше</button>
        </div>
    </div>
</template>
<script>
import gameStore from '../store/gameStore.js'
export default {
    data () {
        return{
            questions: [],
            timerId: null,
            countDown: 10,
            questionIndex: 0,
            currentQuestionId: 0,
            answer: 0,
            answersResult: []
        }
    },
    computed: {
        questions () {
            return gameStore.state.questions
        }
    },
    mounted () {
        this.timer()
        this.nextQuestion()
        this.firstQuestion()
    },
    methods: {
        timer () {
            let self = this
            this.timerId = setInterval( function () {
                self.countDown -= 1
            }, 1000)
        },
        firstQuestion () {
            let content = document.getElementById('content-question')
            let currentQuestion = questions[this.questionIndex]
            content.innerHTML = currentQuestion.content
            this.currentQuestionId = currentQuestion.id
        },
        nextQuestion () {
            let self = this
            setTimeout (function () {
                clearInterval(self.timerId)
                if (self.questionIndex < self.questions.length - 1) {
                    self.questionIndex += 1
                    self.answersResult.push({'id': self.currentQuestionId, 'answer': self.answer})
                    self.nextQuestion()
                } else {
                    self.sendTestResult()
                }
            }, 10000)
        }
        // sendTestResult () {
        //     this.$http.post(httpStore.state.host + httpStore.state.gameSendResult, data=data).then((response) => {
        //         let gameState = response.data.state
        // }
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/app.scss";
#battlePlay {
    padding: 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box; 
}
.next-question {
    width: 100%;
    float: left;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 40px;
}
.next-question button {
    background-color: $green;
    width: 100%;
    border-radius: 10000px;
    float: left;
    height: 50px;
    color: white;
    outline: none;
    border: none;
}
.count-and-time {
    width: 100%;
    height: 50px;
    float: left;
    margin-top: 20px;
}
.count-wrapp {
    font-size: 12pt;
    float: left;
    color: gray;
}
.time-wrapp {
    font-size: 12pt;
    float: right;
    color: gray;
}
</style>
