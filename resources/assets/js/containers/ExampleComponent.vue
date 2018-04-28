<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example</div>

                    <div class="panel-body">
                        I'm an example component!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { API } from "../config";
    export default {
        mounted() {
            axios.get( API + 'user' ).then(res => console.log(res)).catch(err => console.log(err));
        }
    }
</script>
