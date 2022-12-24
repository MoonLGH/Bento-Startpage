// ┬  ┬┌─┐┌┬┐┌─┐
// │  │└─┐ │ └─┐
// ┴─┘┴└─┘ ┴ └─┘
// Functions for printing both lists

const generateFirstListsContainer = () => {
	for (const list of CONFIG.firstlistsContainer) {
    let listsItem = ""
    for (let i = 0; i < list.links.length; i++) {
      const element = list.links[i];
      listsItem += `<a
      target="${CONFIG.openInNewTab ? '_blank' : ''}"
      href="${element.link}"
      class="listItem"
      >${element.name}</a>`
    }
		let item = `
        <div class="card list list__${list.id}" id="list_${list.id}">
          <i class="listIcon" icon-name="${list.icon}"></i>
          ${listsItem}
        </div>
      `;
		const position = 'beforeend';
		lists_1.insertAdjacentHTML(position, item);
	}
};

const generateSecondListsContainer = () => {
  for (const list of CONFIG.secondListsContainer) {
    let listsItem = ""
    for (let i = 0; i < list.links.length; i++) {
      const element = list.links[i];
      listsItem += `<a
      target="${CONFIG.openInNewTab ? '_blank' : ''}"
      href="${element.link}"
      class="listItem"
      >${element.name}</a>`
    }
		let item = `
        <div class="card list list__${list.id}" id="list_${list.id}">
          <i class="listIcon" icon-name="${list.icon}"></i>
          ${listsItem}
        </div>
      `;
		const position = 'beforeend';
		lists_2.insertAdjacentHTML(position, item);
	}
};

const generateLists = () => {
	switch (CONFIG.bentoLayout) {
		case 'bento':
			generateFirstListsContainer();
			break;
		case 'lists':
			generateFirstListsContainer();
			generateSecondListsContainer();
			break;
    case 'custom':
      generateFirstListsContainer();
      generateSecondListsContainer();
      break;
		default:
			break;
	}
};

generateLists();
