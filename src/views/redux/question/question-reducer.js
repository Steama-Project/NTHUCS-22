import {questionsTypes} from './question-types'

const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          questionText: '無法專注於細節的部分，或在做學校作業或其他活動時，出現粗心的錯誤',
          id: 1,
          questionId: 1,
          answerKey: 1,
          answerValue: "",
          section: "sections",
        },
        {
          title: 'jackets',
          questionText: '很難持續專注於工作或遊戲活動',
          id: 2,
          questionId: 2,
          answerKey: 1,
          answerValue: "",
          section: "sections",

        },
        {
          title: 'sneakers',
          questionText: '看起來好像沒有在聽別人對他(她)說話的內容',
          id: 3,
          questionId: 3,
          answerKey: 1,
          answerValue: "",
          section: "sections",
        },
        {
          title: 'womens',
          questionText: '沒有辦法遵循指示，也無法完成學校作業或家事(並不是由於對立性行為或無法了解指示的內容)',
          size: 'large',
          id: 4,
          questionId: 4,
          answerKey: 1,
          answerValue: "",
          section: "sections",
        },
        {
          title: 'mens',
          questionText: '組織規劃工作及活動有困難',
          size: 'large',
          id: 5,
          questionId: 5,
          answerKey: 1,
          answerValue: "",
          section: "sections",
        },
        {
            title: 'mens',
            questionText: '逃避，或表達不願意，或有困難於需要持續性動腦的工作(例如學校作業或家庭作業)',
            size: 'large',
            id: 6,
            questionId: 6,
            answerKey: 1,
            answerValue: "",
            section: "sections",
          },
          {
            title: 'mens',
            questionText: '會弄丟工作上或活動所必須的東西(例如學校作業、鉛筆、書、工具或玩具)',
            size: 'large',
            id: 7,
            questionId: 7,
            answerKey: 1,
          answerValue: "",
          section: "sections",
          },
          {
            title: 'mens',
            questionText: '很容易受外在刺激影響而分心',
            size: 'large',
            id: 8,
            questionId: 8,
            answerKey: 1,
            answerValue: "",
            section: "sections",
          },
          {
            title: 'mens',
            questionText: '在日常生活中忘東忘西的',
            size: 'large',
            id: 9,
            questionId: 9,
            answerKey: 1,
            answerValue: "",
            section: "sections",
          }
      
      ]   ,
      sections2: [
        {
          title: 'hats',
          questionText: '在座位上玩弄手腳或不好好坐著',
          id: 1,
          questionId: 1,
          answerKey: 2,
          answerValue: "",
          section: "sections2",
        },
        {
          title: 'jackets',
          questionText: '在教室或其他必須持續坐著的場合，會任意離開座位',
          id: 2,
          questionId: 2,
          answerKey: 2,
          answerValue: "",
          section: "sections2",
        },
        {
          title: 'sneakers',
          questionText: '在不適當的場合，亂跑或爬高爬低',
          id: 3,
          questionId: 3,
          answerKey: 2,
          answerValue: "",
          section: "sections2",
        },
        {
          title: 'womens',
          questionText: '很難安靜地玩或參與休閒活動',
          size: 'large',
          id: 4,
          questionId: 4,
          answerKey: 2,
          answerValue: "",
          section: "sections2",
        },
        {
          title: 'mens',
          questionText: '總是一直在動或是像被馬達所驅動',
          size: 'large',
          id: 5,
          questionId: 5,
          answerKey: 2,
          answerValue: "",
          section: "sections2",
        },
        {
          title: 'mens',
          questionText: ' 話很多',
          size: 'large',
          id: 6,
          questionId: 6,
          answerKey: 2,
          answerValue: "",
          section: "sections2",
        },
        {
          title: 'mens',
          questionText: '在問題還沒問完前就急著回答',
          size: 'large',
          id: 7,
          questionId: 7,
          answerKey: 2,
          answerValue: "",
          section: "sections2",
        },
        {
          title: 'mens',
          questionText: '在遊戲中或團體活動中，無法排隊或等待輪流',
          size: 'large',
          id: 8,
          questionId: 8,
          answerKey: 2,
          answerValue: "",
          section: "sections2",
        },{
          title: 'mens',
          questionText: '打斷或干擾別人(例如：插嘴或打斷別人的遊戲)',
          size: 'large',
          id: 9,
          questionId: 9,
          answerKey: 2,
          answerValue: "",
          section: "sections2",
        }

      ],
      sections3: [
        {
          title: 'hats',
          questionText: '發脾氣',
          id: 1,
          questionId: 1,
          answerKey: 3,
          answerValue: "",
          section: "sections3",
        },
        {
          title: 'jackets',
          questionText: '與大人爭論',
          id: 2,
          questionId: 2,
          answerKey: 3,
          answerValue: "",
          section: "sections3",
        },
        {
          title: 'sneakers',
          questionText: '主動地反抗或拒絕大人的要求與規定',
          id: 3,
          questionId: 3,
          answerKey: 3,
          answerValue: "",
          section: "sections3",
        },
        {
          title: 'womens',
          questionText: '故意地做一些事去干擾別人',
          size: 'large',
          id: 4,
          questionId: 4,
          answerKey: 3,
          answerValue: "",
          section: "sections3",
        },
        {
          title: 'mens',
          questionText: '因自己犯的錯或不適當的行為而怪罪別人',
          size: 'large',
          id: 5,
          questionId: 5,
          answerKey: 3,
          answerValue: "",
          section: "sections3",
        },
        {
          title: 'mens',
          questionText: '易怒的或很容易被別人激怒',
          size: 'large',
          id: 6,
          questionId: 6,
          answerKey: 3,
          answerValue: "",
          section: "sections3",
        },
        {
          title: 'mens',
          questionText: '生氣的及怨恨的',
          size: 'large',
          id: 7,
          questionId: 7,
          answerKey: 3,
          answerValue: "",
          section: "sections3",
        },
        {
          title: 'mens',
          questionText: '惡意的或有報復心的',
          size: 'large',
          id: 8,
          questionId: 8,
          answerKey: 3,
          answerValue: "",
          section: "sections3",
        }
      ]                    
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    // const {answerKey, answerValue, section} = action.payload
    switch(action.type) {
      case questionsTypes.UPDATE_QUESTION:
        // console.log(state[sections)
        console.log(action.payload)
        const {answerKey, answerValue, section, questionId} = action.payload;
        const questionSection = state[section]
        questionSection.forEach((question) => {
          if (question.questionId === questionId) {
            question.answerKey = answerKey
            question.answerValue = answerValue
          }
        })

        return {
          ...state,
          [section]: questionSection
      }
        default:
         return state;
    }
};

export default directoryReducer;