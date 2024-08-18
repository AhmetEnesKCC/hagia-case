export const parseHTML = (htmlString, selector) => {
    const html = $(htmlString);
    return [html(selector), html];
};
