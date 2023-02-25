import AdminLayout from 'layouts/AdminLayout.vue'
import MainLayout from 'layouts/MainLayout.vue'
import UserLayout from 'layouts/UserLayout.vue'
const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('src/pages/main/IndexPage.vue'),
        meta: {
          title: '泰山耳鼻喉科 | 首頁',
          login: false,
          admin: false
        }
      },
      {
        path: 'intro',
        name: 'intro',
        component: () => import('src/pages/main/IntroPage.vue'),
        meta: {
          title: '泰山耳鼻喉科 | 診所介紹',
          login: false,
          admin: false
        }
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('src/pages/main/NewsPage.vue'),
        meta: {
          title: '泰山耳鼻喉科 | 最新消息',
          login: false,
          admin: false
        }
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('src/pages/main/ContactPage.vue'),
        meta: {
          title: '泰山耳鼻喉科 | 聯絡我們',
          login: false,
          admin: false
        }
      },
      {
        path: 'doctor',
        name: 'doctor',
        component: () => import('src/pages/main/DoctorPage.vue'),
        meta: {
          title: '泰山耳鼻喉科 | 醫師介紹',
          login: false,
          admin: false
        }
      },
      {
        path: '/login',
        component: () => import('src/pages/main/LoginPage.vue'),
        meta: {
          title: '泰山耳鼻喉科 | 登入',
          login: false,
          admin: false
        }
      }, {
        path: '/register',
        component: () => import('src/pages/main/RegisterPage.vue'),
        meta: {
          title: '泰山耳鼻喉科 | 註冊',
          login: false,
          admin: false
        }
      }
    ]
  },

  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: '/admin',
        component: () => import('pages/admin/AdminPage.vue'),
        meta: {
          title: '管理員 | 首頁',
          login: true,
          admin: true
        }
      },
      {
        path: '/admin/user',
        component: () => import('pages/admin/UserAdmin.vue'),
        meta: {
          title: '管理員 | 會員管理',
          login: true,
          admin: true
        }
      },
      {
        path: '/admin/reserve',
        component: () => import('pages/admin/ReserveAdmin.vue'),
        meta: {
          title: '管理員 | 預約管理',
          login: true,
          admin: true
        }
      },
      {
        path: '/admin/article',
        component: () => import('pages/admin/ArticleAdmin.vue'),
        meta: {
          title: '管理員 | 文章管理',
          login: true,
          admin: true
        }
      },
      {
        path: '/admin/limit',
        component: () => import('pages/admin/LimitAdmin.vue'),
        meta: {
          title: '管理員 | 可預約人管理',
          login: true,
          admin: true
        }
      },
      {
        path: '/admin/banner',
        component: () => import('pages/admin/BannerAdmin.vue'),
        meta: {
          title: '管理員 | BANNER管理',
          login: true,
          admin: true
        }
      },
      {
        path: '/admin/doctor',
        component: () => import('pages/admin/DoctorAdmin.vue'),
        meta: {
          title: '管理員 | 班表管理',
          login: true,
          admin: true
        }
      }

    ]
  },
  {
    path: '/user',
    component: UserLayout,
    children: [
      {
        path: '/user',
        component: () => import('pages/user/UserPage.vue'),
        meta: {
          title: '使用者 | 會員資料',
          login: true,
          admin: false
        }
      },
      {
        path: '/user/edit',
        component: () => import('pages/user/EditPage.vue'),
        meta: {
          title: '使用者 | 編輯會員',
          login: true,
          admin: false
        }
      },
      {
        path: '/user/reserve',
        component: () => import('pages/user/ReservePage.vue'),
        meta: {
          title: '使用者 | 預約',
          login: true,
          admin: false
        }
      },
      {
        path: '/user/see',
        component: () => import('pages/user/SeePage.vue'),
        meta: {
          title: '使用者 | 預約查詢',
          login: true,
          admin: false
        }
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
