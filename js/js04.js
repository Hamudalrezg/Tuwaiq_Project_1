var app = new Vue({
    el: '#app',
    data: {
    isEditing: false,
    user: {
    firstName: 'John Doe',
    username:'johndoe121',
    email: 'demo@gmail.com',
    password: 'password'
    }
    },
    methods: {
    save() {
    this.user.firstName = this.$refs['first_name'].value;
    this.user.username = this.$refs['username'].value;
    this.user.email = this.$refs['email'].value;
    this.user.password = this.$refs['password'].value;
    this.isEditing = !this.isEditing;
    }
    }
    });
   