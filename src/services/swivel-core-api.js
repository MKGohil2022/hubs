export class SwivelCoreApi {
  constructor() {
    this.core2Url = "https://api-dev-swivel.com/core2/";
  }
  // send discord event
  async discordEvent(message) {
    return new Promise(async resolve => {
      try {
        // request body
        const requestBody = {
          content: message
        };
        const response = await fetch(`${this.core2Url}discord_event`, this.constructRequestPayload(requestBody));
        let result = null;
        if (response) {
          const jsonData = await response.json();
          if (jsonData && jsonData.result === "pass") {
            result = jsonData;
          }
        } else {
          console.log("Discord event api failed");
        }
        resolve(result);
      } catch {
        console.log("Discord event api failed");
      }
    });
  }
  // construct request payload
  constructRequestPayload(data) {
    // payload
    const payload = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    return payload;
  }
}
