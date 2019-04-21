<template>
    <div id="battlePlay">
        <div class="count-and-time">
            <p class="count-wrapp">{{questionIndex + 1}} из {{questions.length}} вопросов</p>
            <p class="time-wrapp">осталось {{countDown}} сек.</p>
        </div>
        <div class="content-title">
            <p>{{questionName}}</p>
        </div>
        <div id="content-question">
        </div>
        <!-- <div class="next-question">
            <button @click="next()">дальше</button>
        </div> -->
    </div>
</template>
<script>
import gameStore from '../store/gameStore.js'
import httpStore from '../store/httpStore.js'
export default {
    data () {
        return{
            timerId: null,
            countDown: 10,
            questionIndex: 0,
            currentQuestionId: 0,
            answer: 0,
            answersResult: [],
            questionName: ''
        }
    },
    computed: {
        questions () {
            return gameStore.state.questions
        }
    },
    mounted () {
        this.nextQuestion()
    },
    methods: {
        timer () {
            this.countDown = 10
            let self = this
            this.timerId = setInterval( function () {
                self.countDown -= 1
            }, 1000)
        },
        setQuestion () {
            this.answer = 0
            let content = document.getElementById('content-question')
            let currentQuestion = this.questions[this.questionIndex]
            this.questionName = currentQuestion.name
            content.innerHTML = currentQuestion.content
            this.currentQuestionId = currentQuestion.id
        },
        nextQuestion () {
            let self = this
            clearInterval(this.timerId)
            this.timer()
            this.setQuestion()
            setTimeout (function () {
                self.questionIndex += 1
                if (self.questionIndex < self.questions.length) {
                    self.answersResult.push({'test_id': self.currentQuestionId, 'answer_code': self.answer})
                    self.nextQuestion()
                } else {
                    self.answersResult.push({'test_id': self.currentQuestionId, 'answer_code': self.answer})
                    self.sendTestResult()
                    self.$router.push('/battleResult')
                }
            }, 10000)
        },
        sendTestResult () {
            let data = {
                'user_id': +localStorage.getItem('id'),
                'answers': this.answersResult
            }
            console.log(data)
            this.$http.post(httpStore.state.host + httpStore.state.game + gameStore.state.gameId + '/answers/', data=data).then((response) => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
        },
        next () {
            clearInterval(this.timerId)
            if (this.questionIndex < this.questions.length - 1) {
                this.questionIndex += 1
                this.answersResult.push({'test_id': this.currentQuestionId, 'answer_code': this.answer})
                this.nextQuestion()
            } else {
                this.sendTestResult()
                this.$router.push('/battleResult')
            }
        }
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
.content-title {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
}
.content-title p {
    font-size: 16pt;
}
.quest-text {
    font-size: 16pt;
}
.img {
    width: 100%;
    height: auto;
    margin: 10px 0;
}
</style>
