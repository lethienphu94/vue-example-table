import TopBarSearch from "@/components/layouts/TopBarSearch";
import TopBarAlert from "@/components/layouts/TopBarAlert";
import TopBarUser from "@/components/layouts/TopBarUser";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'TopBar',
    computed: {
        currentRouteName() {
            return this.$route.meta.title;
        }
    },
    data() {
        return {
            faSearch
        }
    },
    components: {
        FontAwesomeIcon,
        TopBarSearch,
        TopBarAlert,
        TopBarUser
    }
};