<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-size-66">
        <edit-profile-form :data-background-color="'purple'">

        </edit-profile-form>
      </div>
      <div class="md-layout-item md-size-33">
        <user-card>

        </user-card>
      </div>
    </div>
  </div>
</template>

<script>
import EditProfileForm from './UserProfile/EditProfileForm.vue'
import UserCard from './UserProfile/UserCard.vue'

export default{
  components: {
    'edit-profile-form': EditProfileForm,
    'user-card': UserCard
  }
}
</script>
