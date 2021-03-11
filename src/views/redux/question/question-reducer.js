const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: '無法專注於細節的部分，或在做學校作業或其他活動時，出現粗心的錯誤',
          id: 1,
          linkUrl: 1
        },
        {
          title: 'jackets',
          imageUrl: '很難持續專注於工作或遊戲活動',
          id: 2,
          linkUrl: 2
        },
        {
          title: 'sneakers',
          imageUrl: '看起來好像沒有在聽別人對他(她)說話的內容',
          id: 3,
          linkUrl: 3
        },
        {
          title: 'womens',
          imageUrl: '沒有辦法遵循指示，也無法完成學校作業或家事(並不是由於對立性行為或無法了解指示的內容)',
          size: 'large',
          id: 4,
          linkUrl: 4
        },
        {
          title: 'mens',
          imageUrl: '組織規劃工作及活動有困難',
          size: 'large',
          id: 5,
          linkUrl: 5
        },
        {
            title: 'mens',
            imageUrl: '逃避，或表達不願意，或有困難於需要持續性動腦的工作(例如學校作業或家庭作業)',
            size: 'large',
            id: 6,
            linkUrl: 7
          },
          {
            title: 'mens',
            imageUrl: '會弄丟工作上或活動所必須的東西(例如學校作業、鉛筆、書、工具或玩具)',
            size: 'large',
            id: 7,
            linkUrl: 8
          }
      ]   ,
      sections2: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ],
      sections3: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]                    
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
         return state
    }
};

export default directoryReducer;