import type Professor from '@pages/attendance/professor.astro'

export enum CurrentLandingPage {
	Home,
	About,
	HowItWorks,
}

export interface Page {
	title: string
	url: string
}

export const LandingPages = {
	Home: {
		title: 'Home',
		url: '/home',
	},
	About: {
		title: 'About',
		url: '/about',
	},
	HowItWorks: {
		title: 'How It Works',
		url: '/how-it-works',
	},
}

export const AuthPages = {
	SignIn: {
		title: 'Sign In',
		url: '/sign-in',
	},
	SignUp: {
		title: 'Sign Up',
		url: '/sign-up',
	},
}

export const AppPages = {
	Student: {
		Attendance: {
			title: 'Attendance',
			url: '/attendance/student',
		},
	},
	Professor: {
		Attendance: {
			title: 'Attendance',
			url: '/attendance/professor',
		},
	},
	Administrator: {
		Attendance: {
			title: 'Attendance',
			url: '/attendance/administrator',
		},
	},
}
