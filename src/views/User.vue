<template>
  <div class="login">
      <form class="form-inline pt-2 pb-2">
        <div class="email ml-2">
            <input placeholder="input your email" type="text" class="form-control" id="inputmail">
        </div>
        <div class="pass ml-2">
            <input placeholder="input your password" type="password" class="form-control" id="inputPassword">
        </div>

        <div class="form-check ml-2">
            <input class="form-check-input" type="checkbox" id="inlineFormCheck">
            <label class="form-check-label" for="inlineFormCheck">
            Remember me
            </label>
        </div>

        <button type="submit" class="btn btn-primary ml-2">Submit</button>
      </form>
  </div>
</template>

<script>
export default {
    name: "User"
}
</script>

<style>
.login {
    background-color: #32fef4b6;
}
</style>