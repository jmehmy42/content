document.addEventListener('DOMContentLoaded', () => {
    const articles = [
        {
            title: "Writing Your First C Function at 42 School",
            link: "https://jmehmy42.github.io/content/articles/Writing_Your_First_C_Function_at_42_School_-_ft_putchar.html"
        },
        {
            title: "Mastering Command Line Arguments in C",
            link: "https://jmehmy42.github.io/content/articles/Mastering_Command_Line_Arguments_in_C:_A_Comprehensive_Guide_with_Examples.html"
        },
        {
            title: "Understanding Variables and Constants in C Programming",
            link: "https://jmehmy42.github.io/content/articles/Understanding_Variables_and_Constants_in_C_Programming:_A_Complete_Guide_for_Beginners.html"
        }
    ];

    const articleList = document.getElementById('article-list');

    articles.forEach(article => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${article.link}" target="_blank">${article.title}</a>`;
        articleList.appendChild(listItem);
    });
});
