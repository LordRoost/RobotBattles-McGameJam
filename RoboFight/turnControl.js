function TurnControl()
{
    this.timePerTurn = 2;
    this.currentTime = 0;
    this.currentTurn = 1;
    this.scanningState = false;

    this.muzzleFlash = new MuzzleFlash();

    this.arrowAnimationTime = 0;

    this.Update = function()
    {
        this.arrowAnimationTime += ps.deltaTime;
        if(this.arrowAnimationTime > 1)
        {
            this.arrowAnimationTime -= 1;
        }

        turnArrow.SetPositionY(turnArrowYposition + turnArrowYdisplacement*this.arrowAnimationTime);

        if(!this.scanningState)
        {
            this.currentTime += ps.deltaTime;
            if(this.currentTime > this.timePerTurn)
            {
                this.currentTime -= this.timePerTurn;
                this.currentTurn = (this.currentTurn % 2)+1;

                //make the robo fire
                turnArrow.SetPositionX(turnArrowXPositions[this.currentTurn-1]);
                robots[this.currentTurn].Fire();
            }

            robots[this.currentTurn].UpdateEnergy();

            this.muzzleFlash.Update();
        }

        keyboard.Update();
    }
}