Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue',
        groceryList: [
            { id: 0, text: 'Vegetable' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'What do you want eat' },
        ]
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: `You loaded this page on ` + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: false
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'C#' },
            { text: 'PHP' },
            { text: 'JS' }
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!',
    },
    methods: {
    reverseMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 1
    },
    created: function () {
        console.log(`a is: ` + this.message)
    }
})

var app9 = new Vue({
    el: '#app-9',
    data: {
        message: 'hello world'
    },
    methods: {
        revertMessage: function () {
            return this.message.split('').reverse().join('')
        }
    },
})

var app10 = new Vue({
    el: '#app-10',
    data: {
        firstName: 'Khanh',
        lastName: 'Phan'
    },
    // methods: {
    //     fullName: function() {
            // return `${this.firstName} ${this.lastName}`
    //     }
    // },
    computed: {
        fullName: {
            get: function() {
                return `${this.firstName} ${this.lastName}`
            },
            set: function(newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName  = names[names.length - 1]
            }
        }
    }
})

var app11 = new Vue({
    el: '#app-11',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question'
    },
    watch: {
        question: function (oldQuestion, newQuestion) {
            this.answer = 'Waiting for you stop typing...'
            this.debouncedGetAnswer()
        }
    },
    created: function () {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
        getAnswer: function () {
            if (this.question.indexOf('?') === -1){
                this.answer
                return
            }
            this.answer = 'Thinking...'
            var vm = this
            axios.get('https://yesno.wtf/api').then((res) => {
                vm.answer = _.capitalize(res.data.answer)
            }).catch((e) => {
                vm.answer = `Error ${e}`
            })
        }
    },
})

var app12 = new Vue({
    el: '#app-12',
    data: {
        isActive: true,
        hasError: false,
        classOne: 'active',
        classTwo: 'stop'
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive && !this.hasError,
                'text-default': this.hasError && this.hasError.type === 'fatal'
            }
        }
    }
})

Vue.component('my-component', {
    template: `<p class='baz boo'>Hi</p>`
})

var app13 = new Vue({
    el: '#app-13',
    data: {
        activeColor: 'red',
        fontSize: 30,
        baseStyle: {
            fontSize: '28px',
            color: 'purple'
        },
        overridingStyle: {
            fontWeight: 'bold',
            letterSpacing: '5px'
        },
        awesome: false
    }
})

Vue.component('number-component', {
    template: '<h4>number</h4>'
})

 var app14 = new Vue({
    el: '#app-14',
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ],
        objectData: {
            title: 'New Object',
            author: 'K.P',
            date: '26/11/2021'
        },
        numbers: [1, 3, 5, 6, 8, 10, 13, 53, 23, 66, 88]
    },
    computed: {
        evenNumber: function () {
            return this.numbers.filter((n) => n % 2 === 0)
        }
    }
 })

 Vue.component('todo-item', {
    template: '\
        <li>\
            {{ title }}\
            <button v-on:click="$emit(\'remove\')">Remove</button>\
        </li>\
    ',
    props: ['title']
 })

var app15 = new Vue({
    el: '#app-15',
    data: {
        newTodoText: '',
        todos: [
            {
              id: 1,
              title: 'Do the dishes',
            },
            {
              id: 2,
              title: 'Take out the trash',
            },
            {
              id: 3,
              title: 'Mow the lawn'
            }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
})

var app16 = new Vue({
    el: '#app-16',
    data: {
        count: 0,
        name: 'Khanh'
    },
    methods: {
        greet: function (event) {
            alert(`Hello + ${this.name}`)
            if (event) {
                alert(event.target.tagName)
            }
        }
    },  
})

var app17 = new Vue({
    el: '#app-17',
    data: {
        checked: false,
        checkedNames: [],
        picked: '',
        selected: 'A',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ],
    },
    methods: {
        say: function (message, event) {
            if (event) {
                event.preventDefault();
            }
        },
        action: function (action) {
            console.log(action)
        },
        doSomething: function () {
            alert('Ctrl Click')
        }
    },
    computed: {
        
    }
})

Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++" >Clicked me {{ count }}</button>'
})

Vue.component('show-title', {
    props: ['title', 'name'],
    template: '<h3>{{ title }} - {{ name }}</h3>'
})

Vue.component('blog-demo', {
    props: ['id','title'],
    template: '<h3>{{ id }} - {{ title }}</h3>'
})

var app18 = new Vue({
    el: '#app-18',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
        ]
    }
})

Vue.component('blog-post', {
    props: ['post'],
    template: `
        <div class="blog-posts">
            <h3>{{ post.title }}</h3>
            <button>Enlarge text</button>
            <div v-html="post.content"></div>
        </div>
    `
})

var app19 = new Vue({
    el: '#app-19',
    data: {
        posts: [/* ... */],
        postFontSize: 1
    }
})

Vue.component('blog-post', {
    props: ['postTitle', 'author'],
    template: '<h3>{{ postTitle }} - {{ author }}</h3>'
})

function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

Vue.component('show-post', {
    props: {'title': String, 'name': String, 'birthday': String, fullName: Person,
            'like': { type: Number, default: 100 }, 'boolean': Boolean, 'commentIds': Array},
    template: `<h4>{{ title }} - {{ name }} - {{ birthday }} - {{ like }} - {{ boolean }} - {{ commentIds }} 
            {{ counter }} - {{ formatString() }}
        </h4>`,
    data: function () {
        return {
            counter:  this.like + 1,
            formatString: () => {
                return this.title.trim().toUpperCase()
            }
        }
    }
})

Vue.component('base-input', {
    inheritAttrs: true,
    props: ['label', 'value'],
    template: `
      <label>
        {{ label }}
        <input
          v-bind="$attrs"
          v-bind:value="value"
          v-on:input="$emit('input', $event.target.value)"
        >
      </label>
    `
  })

Vue.component('base-checkbox', {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean
    },
    template: `
        <input
        type="checkbox"
        v-bind:checked="checked"
        v-on:change="$emit('change', $event.target.checked)"
        >`
    ,
    data: function () {
        return {
            check: console.log(this.checked)
        }
    }
})

var app20 = new Vue({
    el: "#app-20",
    data: {
        post: {
            title: 'this is title',
            author: {
                name: 'K.P',
                birthday: '31/10/1998'
            }
        },
        username: 'K.P',
        lovingVue: false
    }
})