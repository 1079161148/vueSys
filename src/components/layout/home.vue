<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <!-- <v-tags></v-tags> -->
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </transition>
                <!-- <el-backtop target=".content"></el-backtop> -->
            </div>
        </div>
    </div>
</template>

<script>
import vHead from './myHeader.vue';
import vSidebar from './siderBar.vue';
import { mapGetters } from 'vuex';
export default {
    data() {
        return {

        };
    },
    components: {
        vHead,
        vSidebar,
    },
     computed: {
    ...mapGetters(['collapse']),
  },
    created() {

    }
};
</script>
