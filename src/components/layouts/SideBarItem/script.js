import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChartPie, faTicketAlt, faCog } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'SiderBarItem',
    data() {
        return {
            faChartPie,
            faTicketAlt,
            faCog
        }
    },
    components: {
        FontAwesomeIcon
    }
};