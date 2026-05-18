namespace AlgorithmVisualizer
{
    partial class SettingsForm
    {
        private System.ComponentModel.IContainer components = null;

        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        private void InitializeComponent()
        {
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.numSortSpeed = new System.Windows.Forms.NumericUpDown();
            this.label2 = new System.Windows.Forms.Label();
            this.numArraySize = new System.Windows.Forms.NumericUpDown();
            this.label1 = new System.Windows.Forms.Label();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.numPathSpeed = new System.Windows.Forms.NumericUpDown();
            this.label3 = new System.Windows.Forms.Label();
            this.numGridSize = new System.Windows.Forms.NumericUpDown();
            this.label4 = new System.Windows.Forms.Label();
            this.btnSave = new System.Windows.Forms.Button();
            this.groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.numSortSpeed)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.numArraySize)).BeginInit();
            this.groupBox2.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.numPathSpeed)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.numGridSize)).BeginInit();
            this.SuspendLayout();
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.numSortSpeed);
            this.groupBox1.Controls.Add(this.label2);
            this.groupBox1.Controls.Add(this.numArraySize);
            this.groupBox1.Controls.Add(this.label1);
            this.groupBox1.Location = new System.Drawing.Point(12, 12);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(260, 100);
            this.groupBox1.TabIndex = 0;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Sorting Settings";
            // 
            // numSortSpeed
            // 
            this.numSortSpeed.Location = new System.Drawing.Point(134, 58);
            this.numSortSpeed.Maximum = new decimal(new int[] { 1000, 0, 0, 0 });
            this.numSortSpeed.Minimum = new decimal(new int[] { 1, 0, 0, 0 });
            this.numSortSpeed.Name = "numSortSpeed";
            this.numSortSpeed.Size = new System.Drawing.Size(100, 27);
            this.numSortSpeed.TabIndex = 3;
            this.numSortSpeed.Value = new decimal(new int[] { 20, 0, 0, 0 });
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(16, 60);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(89, 20);
            this.label2.TabIndex = 2;
            this.label2.Text = "Speed (ms):";
            // 
            // numArraySize
            // 
            this.numArraySize.Location = new System.Drawing.Point(134, 25);
            this.numArraySize.Maximum = new decimal(new int[] { 500, 0, 0, 0 });
            this.numArraySize.Minimum = new decimal(new int[] { 10, 0, 0, 0 });
            this.numArraySize.Name = "numArraySize";
            this.numArraySize.Size = new System.Drawing.Size(100, 27);
            this.numArraySize.TabIndex = 1;
            this.numArraySize.Value = new decimal(new int[] { 50, 0, 0, 0 });
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(16, 27);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(79, 20);
            this.label1.TabIndex = 0;
            this.label1.Text = "Array Size:";
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.numPathSpeed);
            this.groupBox2.Controls.Add(this.label3);
            this.groupBox2.Controls.Add(this.numGridSize);
            this.groupBox2.Controls.Add(this.label4);
            this.groupBox2.Location = new System.Drawing.Point(12, 128);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(260, 100);
            this.groupBox2.TabIndex = 1;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "Pathfinding Settings";
            // 
            // numPathSpeed
            // 
            this.numPathSpeed.Location = new System.Drawing.Point(134, 58);
            this.numPathSpeed.Maximum = new decimal(new int[] { 1000, 0, 0, 0 });
            this.numPathSpeed.Minimum = new decimal(new int[] { 1, 0, 0, 0 });
            this.numPathSpeed.Name = "numPathSpeed";
            this.numPathSpeed.Size = new System.Drawing.Size(100, 27);
            this.numPathSpeed.TabIndex = 3;
            this.numPathSpeed.Value = new decimal(new int[] { 50, 0, 0, 0 });
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(16, 60);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(89, 20);
            this.label3.TabIndex = 2;
            this.label3.Text = "Speed (ms):";
            // 
            // numGridSize
            // 
            this.numGridSize.Location = new System.Drawing.Point(134, 25);
            this.numGridSize.Maximum = new decimal(new int[] { 100, 0, 0, 0 });
            this.numGridSize.Minimum = new decimal(new int[] { 5, 0, 0, 0 });
            this.numGridSize.Name = "numGridSize";
            this.numGridSize.Size = new System.Drawing.Size(100, 27);
            this.numGridSize.TabIndex = 1;
            this.numGridSize.Value = new decimal(new int[] { 20, 0, 0, 0 });
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(16, 27);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(71, 20);
            this.label4.TabIndex = 0;
            this.label4.Text = "Grid Size:";
            // 
            // btnSave
            // 
            this.btnSave.Location = new System.Drawing.Point(92, 246);
            this.btnSave.Name = "btnSave";
            this.btnSave.Size = new System.Drawing.Size(94, 29);
            this.btnSave.TabIndex = 2;
            this.btnSave.Text = "Save";
            this.btnSave.UseVisualStyleBackColor = true;
            this.btnSave.Click += new System.EventHandler(this.btnSave_Click);
            // 
            // SettingsForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(288, 289);
            this.Controls.Add(this.btnSave);
            this.Controls.Add(this.groupBox2);
            this.Controls.Add(this.groupBox1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "SettingsForm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterParent;
            this.Text = "Settings";
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.numSortSpeed)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.numArraySize)).EndInit();
            this.groupBox2.ResumeLayout(false);
            this.groupBox2.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.numPathSpeed)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.numGridSize)).EndInit();
            this.ResumeLayout(false);

        }

        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.NumericUpDown numSortSpeed;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.NumericUpDown numArraySize;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.NumericUpDown numPathSpeed;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.NumericUpDown numGridSize;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Button btnSave;
    }
}