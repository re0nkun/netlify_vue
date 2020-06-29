<template>
  <span>
    <slot :user='user' :message='message'>
      {{ user.lastName }}
    </slot>
  </span>
</template>

<script>
export default {
  data() {
    return{
      user:{
        firstName: 'John',
        lastName: 'Doe',
        age: '25',
        sex: '男性',
      },
      message: 'Hello Scoped Slot'
    }
  }
}
</script>