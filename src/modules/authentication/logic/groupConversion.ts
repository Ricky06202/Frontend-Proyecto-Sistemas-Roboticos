import type { ApiGroup, Rol } from '@authentication/constants/groupsTypes'

export function toRol(group: ApiGroup): Rol {
	return {
		id: group.id,
		name: group.name,
	}
}
