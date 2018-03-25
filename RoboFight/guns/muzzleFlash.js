function MuzzleFlash()
{
    this.isVisible
    this.currentTime = 0;
    this.loopTime = 0.09;
    this.time = 100.0;
    this.maxTime = 0.7;
    this.usedSprite = muzzleFlash1;

    this.Update = function()
    {
        if(this.time < this.maxTime || this.isVisible)
        {
            this.time += ps.deltaTime;
            this.currentTime += ps.deltaTime;

            if(this.currentTime > this.loopTime)
            {
                this.currentTime -= this.loopTime;
                this.isVisible = !this.isVisible;
            }

            this.usedSprite.SetVisibility(this.isVisible);
        }
    }

    this.StartFire = function(roboID)
    {
        muzzleFlash1.SetVisibility(false);
        muzzleFlash2.SetVisibility(false);

        if(roboID == 1)
        {
            this.usedSprite = muzzleFlash1;
            muzzleFlash1.SetVisibility(true);
            sound_rifle1.stop();
            sound_rifle1.play();
        }
        else
        {
            this.usedSprite = muzzleFlash2;
            muzzleFlash2.SetVisibility(true);
            sound_rifle2.stop();
            sound_rifle2.play();
        }

        this.time = 0;

        
    }
}