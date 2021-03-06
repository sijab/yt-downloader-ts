const node_env = process.env.NODE_ENV === 'development' ? 'http://localhost:4200' : 'https://moja-domena.com';

export const config = {
    routerPath: {
        login: '/login',
        register: '/register',
        registerDone: '/register-done',
        confirm: '/confirm/:token',
        resetPassword: '/reset-password/:token',
        home: '/'
    },
    url: {
        user: {
            registerPath: `${node_env}/user/register`,
            loginPath: `${node_env}/user/login`,
            logoutPath: `${node_env}/user/logout`,
            meRefresh: `${node_env}/user/me`,
            confirm: `${node_env}/user/confirm`,
            generateResetLink: `${node_env}/user/generate-password`,
            resetPassword: `${node_env}/user/reset-password`
        },
        folder: {
            getAllFoldersPath: `${node_env}/folder/get-all`,
            deleteFolderPath: `${node_env}/folder/delete`,
            addFolderPath: `${node_env}/folder/add`
        },
        data: {
            getAllDataPath: `${node_env}/data/get-all`,
            deleteDataPath: `${node_env}/data/delete`,
            addDataPath: `${node_env}/data/add`
        },
        download: {
            getInfo: `${node_env}/download/get-info`,
            downloadOne: `${node_env}/download/download-one`,
            downloadZip: `${node_env}/download/download-zip`
        },
    }
}