var d=Object.defineProperty;var o=(a,t,s)=>t in a?d(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;var i=(a,t,s)=>(o(a,typeof t!="symbol"?t+"":t,s),s);import{h as c}from"./singletons.8fd85d66.js";const m=c("goto"),v=`안녕하세요! 저는 바다거북 수프 문제를 출제하는 바다거북이에요.
문제를 듣고 싶다면 '!문제'를 입력해주세요.`,p="오류가 발생했어요",l="질문을 입력해주세요",f="!문제",u="위의 형식을 따르는 수수께끼를 출제해주세요",_=`바다거북 수프 게임은 다음과 같이 진행됩니다.

    1. 출제자가 (이야기 형식의) 수수께끼를 만들어 출제한다.
    2. 참가자들은 출제자에게 스무고개 형식의 질문을 하고, 출제자는 그에 대한 대답을 한다.
    3. 정보를 통해 참가자들은 이야기의 전말을 추리한다.

예를 들어, 문제는 다음과 같습니다.

    한 남자가, 어느 바닷가 레스토랑에서 바다거북 수프를 주문했으며 그 남자는 바다거북 수프를 한 수저 먹고는 주방장을 불렀다.
    “죄송합니다. 이거 정말로 바다거북 수프인가요?”
    “네, 틀림없는 바다거북 수프 맞습니다.”
    남자는 계산을 마친 뒤 집에 돌아가서 자살했다.
    왜 그랬을까?

이 문제의 해답은 다음과 같고, 출제자만 알고 있습니다.

남자는 배를 타고 있었는데 남자가 탄 배가 조난되었다. 몇 명의 다른 사람들과 함께 구명보트를 타서 죽음은 면했지만, 작은 섬에 표류하는 처지가 되었다.
식재료가 떨어진 일행은 체력이 떨어지는 사람부터 죽어가기 시작했다. 결국, 살아남은 사람들은 살기 위하여 시체의 살을 먹기 시작했지만, 단 한 사람은 이 행위를 강력하게 거부했다. 당연히 그 남자는 서서히 죽어가게 되었다.
이 꼴을 가만히 둘 수 없었던 다른 사람 중 하나가 “이건 바다거북 수프야”라고 거짓말을 한 다음 남자에게 수프를 먹여서, 구조될 때까지 살아남을 수 있었다.
그 뒤 레스토랑에서 명백하게 맛이 전혀 다른 이 진짜 바다거북 수프를 직면하게 된 남자는 진실을 알게 된 뒤 목숨을 끊었다.

문제가 출제되면, 참가하는 여러 사람들은 출제자가 예, 아니오로 대답할 수 있는 질문을 하게 되고, 질문에 출제자는 하나하나 대답해 간다. 약간의 힌트를 줘서 푸는 사람들을 정답으로 유도할 수도 있다. 이 놀이는 답을 못 맞히면 출제자가 이기는 그런 놀이가 아니라 어떻게 재미있게 답을 추측해 가느냐, 얼마나 날카로운 질문을 하느냐가 중요하기 때문에 즐거운 플레이를 위해서는 출제자의 적절한 대답 스킬이 요구된다.
예를 들어,

    바닷가 레스토랑인 게 중요합니까? → 조금은 관계있습니다.
    남자는 빚을 지고 있습니까? → 아니오.
    남자가 자살한 것은 스프를 먹은 것이 원인입니까? → 네! 아주 중요합니다!
    주방장은 남자입니까? → 상관없습니다.

이러한 방식으로 게임을 진행하고 싶습니다. 이해했습니까?`,e=class e{constructor(t,s,n){i(this,"chatapi");i(this,"thread_conv_id");i(this,"thread_init_msg_id");i(this,"thread_prev_msg_id");this.chatapi=t,this.thread_conv_id=s,this.thread_init_msg_id=n,this.thread_prev_msg_id=n}static async initialize(t){const s=await t.sendMessage(_);if(s.conversationId===void 0)throw Error("conversationId is not found");e.instance=new e(t,s.conversationId,s.id)}static getInstance(){if(!e.instance)throw new Error("No instance");return e.instance}resetThread(){this.thread_prev_msg_id=this.thread_init_msg_id}async sendThreadMessage(t){const s=await this.chatapi.sendMessage(t,{conversationId:this.thread_conv_id,parentMessageId:this.thread_prev_msg_id,action:"next"});return this.thread_prev_msg_id=s.id,s.text}};i(e,"instance");let r=e;export{r as C,v as a,f as c,p as e,m as g,l as i,u as q};