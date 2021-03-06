import { Data } from '../models/Data';
import { successLogger } from '../../helper/logger';

export const getAllDataService = async (id: string) => {
    try {
        const data: any = await Data.findAll({
            where: {
                folder_id: id
            },
            attributes: ['id', 'url', 'thumbnail', 'title'],
        });
        return successLogger(false, 200, data);

    } catch(e) {
        console.log(e);
    }
}

export const deleteItemService = async (id: string) => {
    try {
        const data = await Data.destroy({where: {id: id}});
        return successLogger(false, 200, data);

    } catch(e) {
        console.log(e)
    }
}

export const addItemService = async (folder_id: string, title: string, imageSrc: string, url: string) => {
    try {
        const data = await Data.create({
            folder_id: Number(folder_id),
            title: title as string,
            thumbnail: imageSrc as string,
            url: url as string
        })
        return successLogger(false, 200, data);

    } catch(e) {
        console.log(e)
    }
}