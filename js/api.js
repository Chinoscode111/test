const baseURL = "http://yogendrapawar.online/simplylocalizeapi/api/InstantPhrase";



async function customFetch(url, options) {   
    const response = await fetch(url, options);
    return response;
}

export const API = {
    validateAPI: async ({ validatedata }) =>
        customFetch(`${baseURL}/validate-instant-api-key`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(validatedata)
        }),

   
    addphrase: async ({ addphrasedata }) =>
        customFetch(`${baseURL}/add-instant-phrase`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addphrasedata)
        }),

        approvephrase: async ({ approvephrasedata }) =>
        customFetch(`${baseURL}/instant-phrase-approve`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(approvephrasedata)
        }),

    ignorephrase: async ({ ignorephrasedata }) =>
        customFetch(`${baseURL}/instant-phrase-ignore`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ignorephrasedata)
        }),

    removephrase: async ({ removephrasedata }) =>
        customFetch(`${baseURL}/instant-phrase-remove`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(removephrasedata)
        }),

    langbyapikey: async ({ apikey }) =>
        customFetch(`${baseURL}/get-language-selectorsetting-by-apikey`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(apikey)
        }),

    langbyprojectid: async ({ projectid }) =>
        customFetch(`${baseURL}/get-language-selectorsetting-by-projectid`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectid)
        }),

    updatelangselector: async ({ langselectordata }) =>
        customFetch(`${baseURL}/update-language-selectorsetting`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(langselectordata)
        }),

    getprojectpublish: async ({ projectpublishdata }) =>
        customFetch(`${baseURL}/get-project-publishsetting`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectpublishdata)
        }),

    updateprojectpublish: async ({ updateprojectpublishdata }) =>
        customFetch(`${baseURL}/update-project-publishsetting`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateprojectpublishdata)
        }),
};

