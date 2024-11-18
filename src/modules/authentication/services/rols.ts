import type { ApiGroup, Rol } from '@authentication/constants/groupsTypes'
import { toRol } from '@authentication/logic/groupConversion'
import axios from 'axios'

const apiRol = axios.create({
	baseURL: 'http://asiscan.sytes.net/users/api/',
})

export function getGroups(): Promise<Rol[]> {
	return apiRol.post('groups/').then((response) => response.data.map((group: ApiGroup) => toRol(group)))
}
