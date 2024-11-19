import type { ApiGroup, Rol } from '@authentication/constants/groupsTypes'
import { toRol } from '@authentication/logic/groupConversion'
import axios from 'axios'
import { APIBaseUrl } from 'src/env'

const apiRol = axios.create({
	baseURL: APIBaseUrl + 'users/api/',
})

export function getGroups(): Promise<Rol[]> {
	return apiRol.post('groups/').then((response) => response.data.map((group: ApiGroup) => toRol(group)))
}
