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
	Student: (id: number) => ({
		Attendance: {
			title: 'Attendance',
			url: `/student/${id}/attendance`,
		},
	}),
	Professor: (id: number) => ({
		Attendance: {
			title: 'Attendance',
			url: `/professor/${id}/attendance`,
		},
	}),
	Administrator: {
		Attendance: {
			title: 'Attendance',
			url: '/administrator/attendance',
		},
	},
}

export const UserPages = {
	Profile: {
		title: 'Profile',
		url: '/account/profile',
	},
}