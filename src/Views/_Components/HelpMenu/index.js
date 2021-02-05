export default {
	name: 'HelpMenu',

	data() {
		return {
      isActive: _.model('auth').token,

      links: [
        {
          href: '/',
          name: 'INÍCIO',
          icon: 'home'
        },
        {
          href: '/categorias',
          name: 'CATEGORIAS',
          icon: 'package'
        },
        {
          href: '/explorar',
          name: 'EXPLORAR',
          icon: 'compass'
        },
        {
          href: '/conta',
          name: 'CONTA',
          icon: 'user'
        }
      ]
		};
	}
};
