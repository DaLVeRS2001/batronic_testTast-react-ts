export const getPathFirstPart = (path: string):string => {
    return '/'+path.split('/').slice(1, -1).join('/')
}

export const findItemNested = (arr: any, itemId: any, nestingKey: string, data: any) => (
    arr.reduce((a: any, item: any) => {
        if (item.route === itemId) item.nodes.push({...data});
        if (item[nestingKey]) return findItemNested(item[nestingKey], itemId, nestingKey, data)
    }, null)
);