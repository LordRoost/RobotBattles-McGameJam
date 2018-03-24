function TurnControl()
{
    this.timePerTurn = 2;
    this.currentTime = 0;
    this.currentTurn = 1;
    this.gamePaused = false;

    this.addons = new Addons();

    this.Update = function()
    {
        if(!gamePaused)
        {
            currentTime += ps.deltaTime;
            if(currentTime > timePerTurn)
            {
                currentTime -= timePerTurn;
                currentTurn = (currentTurn % 2)+1;

                //make the robo fire
                robots[currentTurn].Fire();
            }
            keyboard.Update();
        }

        this.addons.Update();
    }
}