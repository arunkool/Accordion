
class Accordion {

    constructor(accordionObj) {
        const myAccordion = document.getElementById(accordionObj.container);
        const mainTitle = document.createElement('div');
        mainTitle.innerText = accordionObj.mainTitle;
        mainTitle.className = 'main-title'
        myAccordion.appendChild(mainTitle);

        accordionObj.panels.forEach((pannel) => {
            const panelTitle = document.createElement('div');
            panelTitle.className= 'title'
            panelTitle.innerText = pannel.title;
            // this block will be useful to toggle each time independently
            panelTitle.addEventListener('click',() => {
                panelTitle.classList.contains('active') ?
                    panelTitle.classList.remove('active') :
                    panelTitle.classList.add('active');
            });

            if(pannel.subTitle != null){
                const panelSubTitle = document.createElement('div');
                panelSubTitle.className = 'subTitle';
                if(pannel.subTitle.length>150){
                    panelSubTitle.innerText = pannel.subTitle.slice(0,150)+"..";
                }else{
                    panelSubTitle.innerText = pannel.subTitle;
                }
                panelTitle.append(panelSubTitle);
            }else{
                panelTitle.classList.add('no-desc');
            }
            const panelContent = document.createElement('div');
            panelContent.innerHTML =(pannel.content != null)? pannel.content:'';
            panelContent.className = 'panel';
            panelTitle.append(panelContent);
            myAccordion.appendChild(panelTitle);

            /* Should be un commented to toggle one item at a time
            const accordionHeading = document.querySelectorAll('.title');
            accordionHeading.forEach((item, key) => {
                item.addEventListener('click', () => {
                    accordionHeading.forEach(element => {
                        element.classList.contains('active') ?
                            element.classList.remove('active') : null;
                    });

                    item.classList.add('active');
                });
            });*/
        });

    }

}
