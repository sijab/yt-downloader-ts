import { Folders } from '../models/Folder';
import { successLogger } from '../../helper/logger';

export const getFoldersService = async (id: string) => {
    try {
        const data = await Folders.findAll({where: {user_id: id}, attributes: ['title', 'id']});
        return successLogger(false, 200, data)

    } catch(e) {
        console.log(e)
    }
}

export const deleteFolderService = async (id: string | string[], title: string) => {
    try {
        const data = await Folders.destroy({where: {user_id: id, title: title}});
        return successLogger(false, 200, data);

    } catch(e) {
        console.log(e);
    }
}

export const addFolderService = async (id: string, title: string) => {
    try {
        const data = await Folders.create({
            title: title as string, 
            user_id: id as string
        })
        return successLogger(false, 200, data);

    } catch(e) {
        console.log(e)
    }
}