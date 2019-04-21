<template>
    <div id="battlePlay">
        <div class="count-and-time">
            <p>{{questionIndex + 1}} из {{questions.length}} вопросов</p>
            <p>осталось {{countDown}} сек.</p>
        </div>
        <div id="content-question">
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
            coundDown: 10,
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
        this.firstQuestion()
        this.timer()
        this.nextQuestion()
    },
    methods: {
        timer () {
            let self = this
            this.timerId = setInterval( function () {
                self.coundDown -= 0
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

</style>
